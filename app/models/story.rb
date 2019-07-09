# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string           not null
#  author_id  :integer          not null
#  image      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
    validates :title, :body, presence: true

    has_one_attached :image

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :claps,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :StoryClap

    has_many :responses,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Response

    has_many :tags,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Tag
end
