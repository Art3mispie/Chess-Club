CREATE TABLE openCode (
  ID INTEGER,
  Code TEXT
);
CREATE TABLE openNames (
  ID INTEGER,
  Name TEXT
);
CREATE TABLE openPGN (
  ID INTEGER,
  PGN TEXT
);
CREATE TABLE History(
  id INTEGER PRIMARY KEY,
  query_data TEXT,
  query_field TEXT,
  query_result TEXT
);