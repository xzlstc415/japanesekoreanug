# Comments Controller
class CommentsController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :update, :destroy]
  before_action :set_comment, only: [:update, :destroy]

  def index
    episode = Episode.find(params[:episode_id])
    @comments = episode.comments
  end

  def create
    @comment = Comment.new(comment_params)
    unless @comment.save
      render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @comment.update_attributes(comment_params)
      render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @comment.destroy
      head :ok
    else
      render json: { errors: @comment.errors.full_messages }, status: :Forbidden
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :episode_id, :parent_comment_id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
    unless @comment.is_owner(current_user)
      render json: { errors: ['you are not authorized for this action'] }, status: :unauthorized
    end
  end
end
