# SimilarEpisodeGroupsController
class SimilarEpisodeGroupsController < ApplicationController
  def index
    @similar_episode_groups = SimilarEpisodeGroup.all
  end

  def show
    @similar_episode_group = SimilarEpisodeGroup.find(params[:id])
  end

  def create
    @similar_episode_group = SimilarEpisodeGroup.new(similar_episode_group_params)

    return if @similar_episode_group.save
    render json: { errors: @similar_episode_group.errors.full_messages },
           status: :unprocessable_entity
  end

  def update
    @similar_episode_group = SimilarEpisodeGroup.find(params[:id])
    return if @similar_episode_group.update_attributes(similar_episode_group_params)
    render json: { errors: @similar_episode_group.errors.full_messages },
           status: :unprocessable_entity
  end

  def destroy
    @similar_episode_group = SimilarEpisodeGroup.find(params[:id])
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
