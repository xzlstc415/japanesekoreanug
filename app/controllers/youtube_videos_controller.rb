# Youtube Video Controller
class YoutubeVideosController < ApplicationController
  before_action :authenticate_auth_user!
  after_action :verify_authorized

  def index
  end

  def create
    authorize YoutubeVideo
    YoutubeVideosWorker.perform_async(YoutubeClient.first.id)
    render json: { message: 'Process started, it make take a while to finish' }
  end
end
