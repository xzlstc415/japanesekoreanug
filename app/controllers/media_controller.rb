# MediaController
class MediaController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :destroy]
  def index
    @media = Medium.all
  end

  def create
    @medium = Medium.new(medium_params)
    authorize @medium
    unless @medium.save
      render json: { errors: @medium.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def destroy
    @medium = Medium.find(params[:id])
    authorize @medium
    @medium.destroy
    head :ok
  end

  private

  def medium_params
    params.require(:medium).permit(
      :medium_type,
      :image
    )
  end
end
