require 'rails_helper'

describe Tag do
  let(:tag) { build(:tag) }

  context 'validations' do
    it 'has a valid factory' do
      expect(tag).to be_valid
    end

    it 'is invalid without name' do
      tag.name = nil
      tag.valid?
      expect(tag.errors[:name]).to include "can't be blank"
    end

    it 'is invalid without duplicated name' do
      tag.save
      duplicated_tag = build(:tag, name: tag.name)
      duplicated_tag.valid?
      expect(duplicated_tag.errors[:name]).to include 'has already been taken'
    end
  end
end
