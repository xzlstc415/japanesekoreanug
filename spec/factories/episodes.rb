FactoryGirl.define do
  factory :episode do
    sequence(:name) { |n| "episode_#{n}" }
    duration 1800
    description 'test episode'

    factory :episode_for_publish do
      after(:build) do |episode|
        episode.episode_type = create(:episode_type)
        episode.youtube_video = create(:youtube_video)
      end
    end
  end
end
