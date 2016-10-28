class EpisodeTypesController < ApplicationController
  def index
    @episode_types = EpisodeType.all
  end

  def show
    @episode_type = EpisodeType.find(params[:id])
  end
end
