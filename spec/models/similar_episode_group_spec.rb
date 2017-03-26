require 'rails_helper'

describe SimilarEpisodeGroup do
  let(:similar_episode_group) { build(:similar_episode_group) }

  context 'validations' do
    it 'has a valid factory' do
      expect(similar_episode_group).to be_valid
    end

    it 'is invalid without name' do
      similar_episode_group.name = nil
      similar_episode_group.valid?
      expect(similar_episode_group.errors[:name]).to include "can't be blank"
    end

    it 'is invalid with duplicated name' do
      similar_episode_group.save
      dup_similar_episode_group = build(:similar_episode_group,
                                        name: similar_episode_group.name)
      dup_similar_episode_group.valid?
      expect(dup_similar_episode_group.errors[:name]).to include 'has already been taken'
    end
  end
end
