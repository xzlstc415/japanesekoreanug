# EpisodeTypesController
class EpisodeTypesController < ApplicationController
  def index
    @episode_types = EpisodeType.all
  end

  def show
    @episode_type = EpisodeType.find(params[:id])
  end

  def create
    @episode_type = EpisodeType.new(episode_type_params)

    return if @episode_type.save
    render json: { errors: @episode_type.errors.full_messages },
           status: :unprocessable_entity
  end

  def destroy
    @episode_type = EpisodeType.find(params[:id])
    @episode_type.destroy
    head :ok
  rescue
    render json: { error: 'please remove this episode type from all episodes' },
           status: :bad_request
  end

  private

  def episode_type_params
    params.require(:episode_type).permit(:name)
  end
end
