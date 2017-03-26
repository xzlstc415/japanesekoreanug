require 'rails_helper'

describe YoutubeVideo do
  let(:youtube_video) { build(:youtube_video) }

  context 'validations' do
    it 'has a valid factory' do
      expect(youtube_video).to be_valid
    end

    it 'is invalid without api_title' do
      youtube_video.api_title = nil
      youtube_video.valid?
      expect(youtube_video.errors[:api_title]).to include "can't be blank"
    end

    it 'is invalid without api_id' do
      youtube_video.api_id = nil
      youtube_video.valid?
      expect(youtube_video.errors[:api_id]).to include "can't be blank"
    end

    it 'is invalid with duplicated api_id' do
      youtube_video.save
      dup_youtube_video = build(:youtube_video, api_id: youtube_video.api_id)
      dup_youtube_video.valid?
      expect(dup_youtube_video.errors[:api_id]).to include 'has already been taken'
    end

    it 'is invalid without api_privacy_status' do
      youtube_video.api_privacy_status = nil
      youtube_video.valid?
      expect(youtube_video.errors[:api_privacy_status]).to include "can't be blank"
    end

    it 'is invalid without api_duration' do
      youtube_video.api_duration = nil
      youtube_video.valid?
      expect(youtube_video.errors[:api_duration]).to include "can't be blank"
    end

    it 'is invalid without api_embed_html' do
      youtube_video.api_embed_html = nil
      youtube_video.valid?
      expect(youtube_video.errors[:api_embed_html]).to include "can't be blank"
    end

    it 'is invalid without api_processed' do
      youtube_video.api_processed = nil
      youtube_video.valid?
      expect(youtube_video.errors[:api_processed]).to include "can't be blank"
    end
  end
end
