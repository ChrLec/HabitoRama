class Weight < ApplicationRecord
  belongs_to :user

  validates :date, presence: true
  validates :value_in_kg, presence: true, numericality: { greater_than: 0 }
end
