source 'http://rubygems.org'

ruby '2.0.0'

### Core Gems ###
gem 'rails', '~> 4.0.2'
gem 'turbolinks'

gem 'figaro'



### Caching ###
gem 'dalli'
gem 'memcachier'



### Authentication ###
gem 'devise'
gem 'omniauth'



### New Eden APIs ###
gem 'reve', git: 'git://github.com/lisa/reve.git'



### Asset Gems ###
gem 'tophat'

gem 'haml-rails'
gem 'sass-rails'

gem 'bourbon'
gem 'neat'

gem 'coffee-rails'
gem 'jquery-rails'
gem 'modernizr-rails'
gem 'uglifier'

gem 'jbuilder'
gem 'therubyracer'



### Production ###
group :production do
  gem 'pg'
  gem 'rails_12factor'
end



### Development ###
group :development do
  gem 'guard'
  gem 'guard-rubocop'
  gem 'guard-livereload'
  gem 'terminal-notifier-guard'
end



### Development + Test ###
group :development, :test do
  gem 'mysql2'

  # gem 'guard-rspec'
end



### Test ###
group :test do
  # gem 'rspec-rails'
  # gem 'capybara'
  # gem 'factory_girl_rails'
  # gem 'database_cleaner'
  # gem 'shoulda-matchers'
end



### Documentation ###
group :doc do
  gem 'sdoc'
end