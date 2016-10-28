# EpisodesController
class EpisodesController < ApplicationController
  def index
    @episodes = Episode
                .includes([similar_episode_group: :episodes],
                          :tags,
                          :episode_type)
                .all
  end

  def show
    @episode = Episode.find(params[:id])
  end
end
