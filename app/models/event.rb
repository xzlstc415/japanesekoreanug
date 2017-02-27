class Event < ActiveRecord::Base
  enum event_type: [:streaming, :editing, :school, :others]

  validates :title, :start, :end, :event_type, presence: true
  validate :end_is_later_than_start

  private

  def end_is_later_than_start
    errors.add(:end, ' must be later than start') if self.start <= self.end
  end
end
