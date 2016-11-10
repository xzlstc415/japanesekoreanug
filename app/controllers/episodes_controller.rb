# EpisodesController
class EpisodesController < ApplicationController
  def index
    if search_params[:episode_type_name_eq].blank? &&
       search_params[:tags_name_eq].blank? &&
       search_params[:name_or_tags_name_or_episode_type_name_cont].blank?
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
                  .uniq
    end
  end

  def show
    @episode = Episode.find(params[:id])
  end

  private

  def search_params
    params.permit(
      :episode_type_name_eq,
      :tags_name_eq,
      :name_or_tags_name_or_episode_type_name_cont
    )
  end
end
