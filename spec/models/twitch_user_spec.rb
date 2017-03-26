require 'rails_helper'

describe TwitchUser do
  let(:twitch_user) { build(:twitch_user) }

  context 'Validations' do
    it 'has a valid factory' do
      expect(twitch_user).to be_valid
    end

    it 'is invalid without api_id' do
      twitch_user.api_id = nil
      twitch_user.valid?
      expect(twitch_user.errors[:api_id]).to include "can't be blank"
    end

    it 'is invalid with duplicated api_id' do
      twitch_user.save
      dup_twitch_user = build(:twitch_user, api_id: twitch_user.api_id)
      dup_twitch_user.valid?
      expect(dup_twitch_user.errors[:api_id]).to include 'has already been taken'
    end

    it 'is invalid without api_access_token' do
      twitch_user.api_access_token = nil
      twitch_user.valid?
      expect(twitch_user.errors[:api_access_token]).to include "can't be blank"
    end

    it 'is invalid without api_name' do
      twitch_user.api_name = nil
      twitch_user.valid?
      expect(twitch_user.errors[:api_name]).to include "can't be blank"
    end

    it 'is invalid without user' do
      twitch_user.user = nil
      twitch_user.valid?
      expect(twitch_user.errors[:user]).to include "can't be blank"
    end
  end
end
