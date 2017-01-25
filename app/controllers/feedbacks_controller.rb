# FeedbacksController
class FeedbacksController < ApplicationController
  def index
    @feedbacks = Feedback.all
  end

  def create
    @feedback = Feedback.new(feedback_params)
    if @feedback.save
      head :ok
    else
      render json: { errors: @feedback.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

  def feedback_params
    params.require(:feedback).permit(
      :name,
      :email,
      :content
    )
  end
end
