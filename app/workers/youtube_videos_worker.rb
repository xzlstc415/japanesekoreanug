# worker for youtube video import
class YoutubeVideosWorker
  include Sidekiq::Worker

  sidekiq_options unique: :until_executed, retry: true

  def perform(youtube_client_id)
    youtube_client = YoutubeClient.find(youtube_client_id)
    account = Yt::Account.new authorization_code: youtube_client.api_access_token,
                              redirect_uri: youtube_client.api_redirect_uri
    ActiveRecord::Base.transaction do
      account.videos.each do |video|
        youtube_video = YoutubeVideo.find_by(api_id: video.id)
        next if youtube_video.present?
        YoutubeVideo.create(api_title: video.title,
                            api_id: video.id,
                            api_thumbnail_url: video.thumbnail_url,
                            api_privacy_status: video.privacy_status,
                            api_duration: video.duration,
                            api_embed_html: video.embed_html,
                            api_processed: video.processed?)
      end
    end
  end
end
