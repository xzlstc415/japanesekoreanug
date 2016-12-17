# TagsController
class TagsController < ApplicationController
  def autocomplete
    @tags = Tag.search(autocomplete_params)
               .result
  end

  def index
    @tags = Tag.all
  end

  def create
    @tag = Tag.new(tag_params)

    unless @tag.save
      render json: { errors: @tag.errors.full_messages },
             status: :unprocessable_entity
    end
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
