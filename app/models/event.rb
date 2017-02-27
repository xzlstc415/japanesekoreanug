class Event < ActiveRecord::Base
  enum event_type: [:streaming, :editing, :school, :others]

  validates :title, :start, :end, :event_type, presence: true
end
