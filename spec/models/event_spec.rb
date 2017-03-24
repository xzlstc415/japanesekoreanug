require 'rails_helper'

describe Event do
  let(:event) { build(:event) }

  context 'validations' do
    it 'has a valid factory' do
      expect(event).to be_valid
    end

    it 'is invalid without title' do
      event.title = nil
      event.valid?
      expect(event.errors[:title]).to include "can't be blank"
    end

    it 'is invalid without start_time' do
      event.start_time = nil
      event.valid?
      expect(event.errors[:start_time]).to include "can't be blank"
    end

    it 'is invalid without end_time' do
      event.end_time = nil
      event.valid?
      expect(event.errors[:end_time]).to include "can't be blank"
    end

    it 'is invalid without event_type' do
      event.event_type = nil
      event.valid?
      expect(event.errors[:event_type]).to include "can't be blank"
    end
  end
end
