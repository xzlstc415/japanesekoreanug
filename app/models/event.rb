class Event < ActiveRecord::Base
  enum event_type: [:streaming, :editing, :school, :others]
end
