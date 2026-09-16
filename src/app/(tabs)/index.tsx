import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu-outline" size={26} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>EventMate</Text>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.notificationBadge} />
            <Ionicons name="notifications-outline" size={24} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Stories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer} contentContainerStyle={styles.storiesContent}>
          <View style={styles.storyItem}>
            <TouchableOpacity style={styles.addStoryCircle}>
              <Ionicons name="add" size={28} color="#111" />
            </TouchableOpacity>
            <Text style={styles.storyName}>Add Story</Text>
          </View>
          <StoryItem name="Rafd" image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" />
          <StoryItem name="June Doe" image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" />
          <StoryItem name="Ashik Saha" image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80" />
        </ScrollView>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Trending</Text>
          </TouchableOpacity>
        </View>

        {/* Feed Posts */}
        <View style={styles.feedContainer}>
          <PostCard
            name="Ronald Christian Llano"
            location="UMV"
            time="18m ago"
            avatar="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150&q=80"
            postImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          />
          <PostCard
            name="June Doe"
            location="UM Lapu Lapu Gate"
            time="34m ago"
            avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
            postImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StoryItem({ name, image }: { name: string, image: string }) {
  return (
    <View style={styles.storyItem}>
      <Image source={{ uri: image }} style={styles.storyImage} />
      <Text style={styles.storyName} numberOfLines={1}>{name}</Text>
    </View>
  );
}

function PostCard({ name, location, time, avatar, postImage }: { name: string, location: string, time: string, avatar: string, postImage: string }) {
  return (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: avatar }} style={styles.postAvatar} />
        <View style={styles.postMeta}>
          <Text style={styles.postName}>{name}</Text>
          <View style={styles.postLocationRow}>
            <Ionicons name="location-outline" size={14} color="#208AEF" />
            <Text style={styles.postLocation}>{location}</Text>
            <Text style={styles.postTime}> • {time}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark-outline" size={22} color="#A0A0A0" />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: postImage }} style={styles.postImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  storiesContainer: {
    marginBottom: 20,
  },
  storiesContent: {
    paddingHorizontal: 20,
    gap: 16,
  },
  storyItem: {
    alignItems: 'center',
    width: 64,
  },
  addStoryCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 8,
  },
  storyImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#208AEF',
  },
  storyName: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#208AEF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A0A0A0',
  },
  activeTabText: {
    color: '#FFF',
  },
  feedContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  postCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  postAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  postMeta: {
    flex: 1,
  },
  postName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  postLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postLocation: {
    fontSize: 12,
    fontWeight: '600',
    color: '#208AEF',
    marginLeft: 2,
  },
  postTime: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  bookmarkButton: {
    padding: 4,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    backgroundColor: '#F0F0F0',
  }
});
