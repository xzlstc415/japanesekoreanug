FactoryGirl.define do
  factory :episode_type do
    sequence(:name) { |n| "episode_type_#{n}" }
  end
end
