FactoryGirl.define do
  factory :episode do
    sequence(:name) { |n| "episode_#{n}" }
    duration 1800
    description 'test episode'
    after(:build) do |episode|
      episode.episode_type = create(:episode_type)
    end

    factory :episode_for_publish do
      after(:build) do |episode|
        episode.blog = 'blog'
        episode.description = 'description'
        episode.thumbnail = File.new("#{Rails.root}/spec/support/fixtures/blank.jpg")
      end
    end
  end
end
