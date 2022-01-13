# frozen_string_literal: true

require 'open-uri'
require 'json'

def get(url)
  JSON.parse(open(url).read)
end

def get_planets
  planets_response = get 'https://swapi.py4e.com/api/planets'
  planets = planets_response['results']
  until planets_response['next'].nil?
    planets_response = get planets_response['next']
    planets += planets_response['results']
  end
  planets
end

get_planets.each do |planet|
  Planet.new(
    name: planet['name'],
    population: planet['population'].to_i,
    climate: planet['climate'],
    gravity: planet['gravity']
  ).save!
end
