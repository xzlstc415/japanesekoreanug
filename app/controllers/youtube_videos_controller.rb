# Youtube Video Controller
class YoutubeVideosController < ApplicationController
  before_action :authenticate_auth_user!
  after_action :verify_authorized

  def index
    @youtube_videos = YoutubeVideo.all
    authorize @youtube_videos
  end

  def autocomplete
    authorize YoutubeVideo
    @youtube_videos = YoutubeVideo.search(search_params)
                                  .result
  end

  def create
    authorize YoutubeVideo
    YoutubeVideosWorker.perform_async(YoutubeClient.first.id)
    render json: { message: 'Process started, it make take a while to finish' }
  end

  def update
    @youtube_video = YoutubeVideo.find(params[:id])
    authorize @youtube_video
    refreshed_video = Yt::Video.new(id: @youtube_video.api_id)

    if refreshed_video
      unless @youtube_video.update_attributes(api_title: refreshed_video.title,
                                              api_description: refreshed_video.description,  
                                              api_thumbnail_url: refreshed_video.thumbnail_url,
                                              api_privacy_status: refreshed_video.privacy_status,
                                              api_duration: refreshed_video.duration,
                                              api_embed_html: refreshed_video.embed_html,
                                              api_processed: refreshed_video.processed?)
        render json: { errors: @youtube_video.errors.full_messages },
               status: :unprocessable_entity
      end
    end
  end

  def status
    authorize YoutubeVideo
    youtube_client = YoutubeClient.first
    if youtube_client.present?
      account = Yt::Account.new refresh_token: youtube_client.api_refresh_token
      name = account.name
    else
      name = nil
    end
    if name.present?
      render json: { connected: true }
    else
      render json: { connected: false }
    end
  end

  private

  def search_params
    params.permit(
      :api_title_cont
    )
  end
end
