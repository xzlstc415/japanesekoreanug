FactoryGirl.define do
  factory :event do
    sequence(:title) { |n| "event_#{n}" }
    start_time DateTime.now + 1.hour
    end_time DateTime.now + 10.hour
    event_type 'streaming'
  end
end
