# EpisodesController
class EpisodesController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :update, :destroy]
  after_action :verify_authorized
  before_action :set_current_user

  def index
    if params[:starred]
      episodes = policy_scope(Episode)
                 .joins(:starred_episode_users)
                 .where(starred_episode_users: { user: current_auth_user })
    elsif search_params[:episode_type_name_eq].blank? &&
          search_params[:tags_name_eq].blank? &&
          search_params[:similar_episode_group_id_eq].blank? &&
          search_params[:id_in].blank? &&
          search_params[:name_or_tags_name_or_episode_type_name_cont].blank?
      episodes = policy_scope(Episode)
    else
      episodes = policy_scope(Episode)
                 .search(search_params)
                 .result
                 .uniq
    end
    authorize episodes
    @episodes = episodes.page(params[:page]).order('number DESC')
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
      render json: { errors: @episode.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update
    @episode = Episode.find(params[:id])
    authorize @episode
    if params[:episode][:publish]
      @episode.publish!
      head :ok
    elsif params[:episode][:unpublish]
      @episode.unpublish!
      head :ok
    elsif @episode.update_attributes(episode_params)
      head :ok
    else
      render json: { errors: @episode.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

  def search_params
    params.permit(
      :episode_type_name_eq,
      :tags_name_eq,
      :name_or_tags_name_or_episode_type_name_cont,
      :similar_episode_group_id_eq,
      id_in: []
    )
  end

  def episode_params
    params.require(:episode)
          .permit(:name,
                  :duration,
                  :thumbnail,
                  :description,
                  :episode_type_id,
                  :blog,
                  tag_ids: [])
  end

  def set_current_user
    @current_user = current_auth_user
  end
end
