require 'rails_helper'

describe Episode do
  let(:episode) { build(:episode) }

  let(:episode_for_publish) { build(:episode_for_publish) }

  context 'validations' do
    it 'has a valid factory' do
      expect(episode).to be_valid
    end

    it 'has a valid factory for pubilsh' do
      expect(episode_for_publish).to be_valid
    end

    context 'when unpublished' do
      it 'is invalid without a name' do
        episode.name = nil
        episode.valid?
        expect(episode.errors[:name]).to include "can't be blank"
      end

      it 'is invalid with duplicated name' do
        episode.save
        another_episode = build(:episode, name: episode.name)
        another_episode.valid?
        expect(another_episode.errors[:name]).to include 'has already been taken'
      end

      it 'is invalid without a episode_type' do
        episode.episode_type = nil
        episode.valid?
        expect(episode.errors[:episode_type]).to include "can't be blank"
      end

      it 'is invalid with wrong type of file for thumbnail' do
        episode.thumbnail = File.new("#{Rails.root}/spec/support/fixtures/test.txt")
        episode.valid?
        expect(episode.errors[:thumbnail])
          .to match_array ['is invalid', 'has contents that are not what they are reported to be']
        expect(episode.errors[:thumbnail_content_type]).to include 'is invalid'
      end

      it 'is invalid with too big file' do
        episode.thumbnail = File.new("#{Rails.root}/spec/support/fixtures/super_large_test.jpg")
        episode.valid?
        expect(episode.errors[:thumbnail]).to include 'must be in between 0 Bytes and 1000 KB'
      end
    end

    context 'when pubulish' do
      it 'is invalid without a blog' do
        episode.blog = nil
        episode.save
        episode.publish!
        expect(episode.errors[:blog]).to include "can't be blank"
      end

      it 'is invalid without a description' do
        episode.description = nil
        episode.save
        episode.publish!
        expect(episode.errors[:description]).to include "can't be blank"
      end

      it 'is invalid without a thumbnail' do
        episode.thumbnail = nil
        episode.save
        episode.publish!
        expect(episode.errors[:thumbnail]).to include "can't be blank"
      end
    end
  end

  context 'callbacks' do
    context 'before_validation' do
      it 'set_episode_number' do
        episode.valid?
        expect(episode.number).to eq 1
        episode.save

        second_episode = build(:episode)
        second_episode.valid?
        expect(second_episode.number).to eq 2
      end
    end
  end

  context 'scopes' do
    it 'can be scoped to published' do
      episode.save
      episode_for_publish.publish!
      expect(Episode.published).to match_array [episode_for_publish]
    end
  end

  context 'methods' do
    context '#similar_episode_ids' do
      before do
        similar_episode_group = create(:similar_episode_group)
        @episode = episode_for_publish
        @episode.similar_episode_group = similar_episode_group
        @episode.publish!
        @another_episode = create(:episode_for_publish, similar_episode_group: similar_episode_group)
        @another_episode.publish!
      end

      it "returns an collection of similiar episodes' id" do
        expect(@episode.similar_episode_ids).to match_array [@another_episode.id]
        expect(@another_episode.similar_episode_ids).to match_array [@episode.id]
      end

      it "should filter out all the unpublished episodes" do
        unpublished_episode = create(:episode, similar_episode_group: @episode.similar_episode_group)
        expect(@episode.similar_episode_ids).to match_array [@another_episode.id]
      end
    end

    context '#publish!' do
      it 'set published_at to the current time' do
        episode_for_publish.publish!
        expect(episode_for_publish.published_at).not_to be_nil
      end
    end

    context '#published?' do
      it 'returns true if episode is published' do
        episode_for_publish.publish!
        expect(episode_for_publish.published?).to be_truthy
      end

      it 'returns false if episode is not published' do
        expect(episode_for_publish.published?).to be_falsy
      end
    end
  end
end
