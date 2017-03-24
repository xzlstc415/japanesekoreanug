class Event < ActiveRecord::Base
  enum event_type: [:streaming, :editing, :school, :others]

  validates :title, :start_time, :end_time, :event_type, presence: true
  validate :end_is_later_than_start, if: 'start_time.present? && end_time.present?'

  private

  def end_is_later_than_start
    errors.add(:end_time, ' must be later than start') if self.start_time >= self.end_time
  end
end
