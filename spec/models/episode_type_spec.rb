require 'rails_helper'

describe EpisodeType do
  let(:episode_type) { build(:episode_type) }

  context 'validations' do
    it 'has a valid factory' do
      expect(episode_type).to be_valid
    end

    it 'is invalid without name' do
      episode_type.name = nil
      episode_type.valid?
      expect(episode_type.errors[:name]).to include "can't be blank"
    end

    it 'is invalid with duplicated name' do
      episode_type.save
      dup_episode_type = build(:episode_type, name: episode_type.name)
      dup_episode_type.valid?
      expect(dup_episode_type.errors[:name]).to include 'has already been taken'
    end
  end
end
