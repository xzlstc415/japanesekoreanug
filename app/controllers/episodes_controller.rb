# EpisodesController
class EpisodesController < ApplicationController
  def index
    @episodes = episodes.all
  end

  def show
    @episode = Episode.find(params[:id])
  end
end
