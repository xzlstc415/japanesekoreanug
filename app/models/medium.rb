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
                    }

  validates :medium_type, presence: true
  validates_attachment :image, presence: true,
                               size: { in: 0..500.kilobytes }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
