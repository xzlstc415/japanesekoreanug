FactoryGirl.define do
  factory :similar_episode_group do
    sequence(:name) { |n| "similar_episode_group_#{n}" }
  end
end
