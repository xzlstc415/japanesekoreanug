class Medium < ActiveRecord::Base
  enum medium_type: [:icon, :regular, :large]

  has_attached_file :image,
                    styles: lambda { |attachment|
                      {
                        regular: (
                          case attachment.instance.medium_type
                          when 'icon'
                            '48x48#'
                          when 'regular'
                            '180'
                          when 'large'
                            '720'
                          end
                        )
                      }
                    },
                    storage: :s3,
                    s3_credentials: Proc.new { |a| a.instance.s3_credentials }

  validates :medium_type, presence: true
  validates_attachment :image, presence: true,
                               size: { in: 0..50_000.kilobytes }
  validates_attachment_content_type :image, content_type: %r{\Aimage\/.*\z}

  def s3_credentials
    {
      bucket: 'japanesekoreanug-blog-image'
    }
  end
end
