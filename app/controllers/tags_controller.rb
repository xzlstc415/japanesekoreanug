# TagsController
class TagsController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :destroy]
  after_action :verify_authorized, only: [:create, :destroy]
  def autocomplete
    @tags = Tag.search(autocomplete_params)
               .result
  end

  def index
    @tags = Tag.includes(:episodes).all
  end

  def create
    @tag = Tag.new(tag_params)
    authorize @tag

    unless @tag.save
      render json: { errors: @tag.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    authorize @tag
    @tag.destroy

    head :ok
  rescue
    render json: { error: 'please remove this tag from all episodes first' },
           status: :bad_request
  end

  private

  def autocomplete_params
    params.permit(
      :name_cont
    )
  end

  def tag_params
    params.require(:tag)
          .permit(:name)
  end
end
