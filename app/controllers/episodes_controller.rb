# EpisodesController
class EpisodesController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :update, :destroy]
  after_action :verify_authorized

  def index
    if search_params[:episode_type_name_eq].blank? &&
       search_params[:tags_name_eq].blank? &&
       search_params[:name_or_tags_name_or_episode_type_name_cont].blank?
      @episodes = policy_scope(Episode)
    else
      @episodes = policy_scope(Episode)
                  .search(search_params)
                  .result
                  .uniq
    end
    authorize @episodes
  end

  def show
    @episode = Episode.find(params[:id])
    authorize @episode
  end

  def create
    @episode = Episode.new(episode_params)
    authorize @episode

    if @episode.save
      head :created
    else
      render json: { error: @episode.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update
    @episode = Episode.find(params[:id])
    authorize @episode

    if @episode.update_attributes(episode_params)
      head :ok
    else
      render json: { error: @episode.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

  def search_params
    params.permit(
      :episode_type_name_eq,
      :tags_name_eq,
      :name_or_tags_name_or_episode_type_name_cont
    )
  end

  def episode_params
    params.require(:episode)
          .permit(:name,
                  :duration,
                  :thumbnail_url,
                  :description)
  end
end
