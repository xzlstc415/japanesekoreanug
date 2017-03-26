FactoryGirl.define do
  factory :feedback do
    sequence(:name) { |n| "feedbacker_#{n}" }
    email 'test@example.com'
    content 'feedback content'
  end
end
