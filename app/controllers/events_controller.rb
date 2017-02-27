class EventsController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :update, :destroy]
  after_action :verify_authorized, only: [:create, :update, :destroy]
  before_action :set_event, only: [:update, :destroy]

  def index
    @events = Event.where("start > ?", DateTime.now - 20.days)
  end

  def create
    @event = Event.new(event_params)

    authorize @event
    return if @event.save
    render json: { errors: @event.errors.full_messages },
           status: :unprocessable_entity
  end

  def update
    authorize @event
    return if @event.update_attributes(event_params)
    render json: { errors: @event.errors.full_messages },
           status: :unprocessable_entity
  end

  def destroy
    authorize @event
    @event.destroy
    head :ok
  end

  private

  def event_params
    params.require(:event).permit(
      :title,
      :start,
      :end,
      :event_type
    )
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
