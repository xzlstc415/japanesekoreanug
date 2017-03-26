require 'rails_helper'

describe YoutubeClient do
  let(:youtube_client) { build(:youtube_client) }

  context 'validations' do
    it 'has a valid factory' do
      expect(youtube_client).to be_valid
    end

    it 'is invalid without api_access_token' do
      youtube_client.api_access_token = nil
      youtube_client.valid?
      expect(youtube_client.errors[:api_access_token]).to include "can't be blank"
    end

    it 'is invalid without api_refresh_token' do
      youtube_client.api_refresh_token = nil
      youtube_client.valid?
      expect(youtube_client.errors[:api_refresh_token]).to include "can't be blank"
    end
  end
end
