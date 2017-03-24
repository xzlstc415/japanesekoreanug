require 'rails_helper'

describe Comment do
  let(:comment) { build(:comment) }

  context 'validations' do
    it 'has a valid factory' do
      expect(comment).to be_valid
    end

    it 'is invalid without content' do
      comment.content = nil
      comment.valid?
      expect(comment.errors[:content]).to include "can't be blank"
    end

    it 'is invalid without episode' do
      comment.episode = nil
      comment.valid?
      expect(comment.errors[:episode]).to include "can't be blank"
    end
  end

  context 'callbacks' do
    it 'check if message has been deleted' do
      comment.save
      comment.update_attributes(deleted: true)
      expect(comment).to receive(:check_if_deleted)
      comment.save
    end
  end

  context 'scopes' do
    it 'can be scoped to root' do
      comment_with_root = create(:comment_with_parent)
      expect(Comment.root).to match_array [comment_with_root.parent_comment]
    end
  end

  context 'methods' do
    context '#destroy' do
      it "change content to 'this message has been deleted!', and mark as deleted" do
        comment.save
        comment.destroy
        expect(comment.content).to eq 'this message has been deleted!'
        expect(comment).to be_deleted
      end
    end
  end
end
