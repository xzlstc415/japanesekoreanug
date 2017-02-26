class Event < ActiveRecord::Base
  enum type: [:streaming, :editing, :school, :others]
end
