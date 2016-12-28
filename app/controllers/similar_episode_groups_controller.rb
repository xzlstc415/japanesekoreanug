# SimilarEpisodeGroupsController
class SimilarEpisodeGroupsController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :update, :destroy]
  after_action :verify_authorized

  def index
    @similar_episode_groups = SimilarEpisodeGroup.all
    authorize @similar_episode_groups
  end

  def show
    @similar_episode_group = SimilarEpisodeGroup.find(params[:id])
    authorize @similar_episode_group
  end

  def create
    @similar_episode_group = SimilarEpisodeGroup.new(similar_episode_group_params)
    authorize @similar_episode_group

    return if @similar_episode_group.save
    render json: { errors: @similar_episode_group.errors.full_messages },
           status: :unprocessable_entity
  end

  def update
    @similar_episode_group = SimilarEpisodeGroup.find(params[:id])
    authorize @similar_episode_group

    return if @similar_episode_group.update_attributes(similar_episode_group_params)
    render json: { errors: @similar_episode_group.errors.full_messages },
           status: :unprocessable_entity
  end

  def destroy
    @similar_episode_group = SimilarEpisodeGroup.find(params[:id])
    authorize @similar_episode_group

    @similar_episode_group.destroy
    head :ok
  rescue
    render json: { error: 'please remove all episodes from this group first' },
           status: :bad_request
  end

  private

  def similar_episode_group_params
    params.require(:similar_episode_group).permit(
      :name,
      episode_ids: []
    )
  end
end
