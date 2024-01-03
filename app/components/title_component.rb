# frozen_string_literal: true

class TitleComponent < ViewComponent::Base
  BASE_CLASSES = %w[
    font-sans
  ].freeze

  FONT_CLASSES = {
    h1: %w[
      sm:text-xxl
      text-xl
      leading-9
      font-extrabold
    ],
    h2: %w[
      text-2xl
      leading-8
      font-bold
    ],
    h3: %w[
      text-xl
      leading-7
      font-bold
    ],
    h4: %w[
      sm:text-base
      text-[15px]
      leading-6
      font-bold
    ]
  }.freeze

  COLOR_CLASSES = {
    none: [],
    beige: %w[text-beige-600],
    light_beige: %w[text-beige-100],
    black: %w[text-black],
    white: %w[text-white],
    purple: %w[text-purple-600],
    indigo: %w[text-indigo-600],
    teal: %w[text-teal-600],
    orange: %w[text-orange-400],
    gray: %w[text-gray-800],
    light_gray: %w[text-gray-500],
    red: %w[text-red-600],
    green: %w[text-green-600],
    yellow: %w[text-yellow-200]
  }.freeze

  def initialize(style:, color: :black)
    p "coucou"
    @style = style
    @color = color
  end

  def render?
    content.present?
  end

  def classes
    (BASE_CLASSES + FONT_CLASSES[@style] + COLOR_CLASSES[@color]).join(' ')
  end
end
