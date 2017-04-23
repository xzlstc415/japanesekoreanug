require 'rails_helper'
require 'aws-sdk'

describe Medium do
  let(:medium) { build(:medium) }

  context 'validations' do
    it 'has a valid factory' do
      expect(medium).to be_valid
    end

    it 'is valid with png format' do
      medium.image = File.new("#{Rails.root}/spec/support/fixtures/test.png")
      expect(medium).to be_valid
    end

    it 'is invalid without medium_type' do
      medium.medium_type = nil
      medium.valid?
      expect(medium.errors[:medium_type]).to include "can't be blank"
    end

    it 'is invalid without image' do
      medium.image = nil
      medium.valid?
      expect(medium.errors[:image]).to include "can't be blank"
    end

    it 'is invalid with wrong type of file' do
      medium.image = File.new("#{Rails.root}/spec/support/fixtures/test.txt")
      medium.valid?
      expect(medium.errors[:image])
        .to match_array ['is invalid', 'has contents that are not what they are reported to be']
      expect(medium.errors[:image_content_type]).to include 'is invalid'
    end

    it 'is invalid with too big file' do
      medium.image = File.new("#{Rails.root}/spec/support/fixtures/super_large_test.jpg")
      medium.valid?
      expect(medium.errors[:image]).to include 'must be in between 0 Bytes and 1000 KB'
    end
  end
end
