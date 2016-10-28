# Comments Controller
class CommentsController < ApplicationController
  def index
    episode = Episode.find(params[:episode_id])
    @comments = episode.comments
  end
end
