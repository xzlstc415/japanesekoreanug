# EpisodesController
class EpisodesController < ApplicationController
  before_action :authenticate_user!

  def index
    if search_params[:episode_type_name_eq].blank? && search_params[:tags_name_eq].blank?
      @episodes = Episode
                  .includes([similar_episode_group: :episodes],
                            :tags,
                            :episode_type).all
    else
      @episodes = Episode
                  .search(search_params)
                  .result
                  .includes([similar_episode_group: :episodes],
                            :tags,
                            :episode_type)
    end
  end

  def show
    @episode = Episode.find(params[:id])
  end

  private

  def search_params
    params.permit(
      :episode_type_name_eq,
      :tags_name_eq
    )
  end
end
