# frozen_string_literal: true

class Planet < ApplicationRecord
  searchkick word_start: [:name], callbacks: false # callbacks: false to avoid errors with docker-compose initialization
end
