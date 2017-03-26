require 'rails_helper'

describe Feedback do
  let(:feedback) { build(:feedback) }

  context 'validations' do
    it 'has a valid factory' do
      expect(feedback).to be_valid
    end

    it 'is invalid without name' do
      feedback.name = nil;
      feedback.valid?
      expect(feedback.errors[:name]).to include "can't be blank"
    end

    it 'is invalid without email' do
      feedback.email = nil;
      feedback.valid?
      expect(feedback.errors[:email]).to include "can't be blank"
    end

    it 'is invalid without content' do
      feedback.content = nil;
      feedback.valid?
      expect(feedback.errors[:content]).to include "can't be blank"
    end
  end
end
