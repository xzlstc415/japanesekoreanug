# TagsController
class TagsController < ApplicationController
  def autocomplete
    @tags = Tag.search(autocomplete_params)
               .result
  end

  def index
    @tags = Tag.all
  end

  private

  def autocomplete_params
    params.permit(
      :name_cont
    )
  end
end
