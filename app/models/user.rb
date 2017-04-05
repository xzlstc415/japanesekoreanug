# User Model
class User < ApplicationRecord
  enum role: [:admin, :user, :moderator]

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :trackable, :validatable

  has_many :starred_episode_users, dependent: :destroy
  has_many :favourite_episodes, through: :starred_episode_users, source: :episode
  has_attached_file :avatar, styles: { thumb: '64x64#' },
                             default_url: '/images/:style/missing.png',
                             storage: :s3,
                             s3_credentials: Proc.new{|a| a.instance.s3_credentials}

  validates :name, presence: true
  validates_attachment_content_type :avatar, content_type: %r{\Aimage\/.*\z}

  def as_json
    user = super
    user['avatar_url'] = avatar.url(:thumb) if avatar.url != '/images/original/missing.png'
    user
  end

  def s3_credentials
    {
      bucket: "japanesekoreanug-pic",
      access_key_id: "AKIAIBOGVXCP6PHBEYKQ",
      secret_access_key: "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",
      s3_host_name: 's3-ap-northeast-1.amazonaws.com',
      s3_region: 'ap-northeast-1'
    }
  end
end
