#!/bin/bash

# Database configuration
DB_NAME="cariblife_db"
DB_USER="cariblife_user"
DB_PASSWORD="cariblife_password"

echo "Creating PostgreSQL user and database..."

# Create user
psql postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';"

# Create database
psql postgres -c "CREATE DATABASE $DB_NAME;"

# Grant privileges
psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"

echo "Database setup complete!"
